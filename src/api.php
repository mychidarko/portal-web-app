<?php
    public function Send() {
        $email_from = $this->validateParameter('email_from', $this->param['email_from'], STRING);
        $email_to = $this->validateParameter('email_to', $this->param['email_to'], STRING);
        $wallet_to = $this->validateParameter('wallet_to', $this->param['wallet_to'], STRING);
        $wallet_from = $this->validateParameter('wallet_from', $this->param['wallet_from'], STRING);
        $amount = $this->validateParameter('amount', $this->param['amount'], STRING);

        $query = "INSERT INTO transfers (email_from, email_to, wallet_to, wallet_from, amount) VALUES(:email_from, :email_to, :wallet_to, :wallet_from, :amount)";
        $stmt = $this->dbConn->prepare($query);
        $stmt->bindParam(":email_from", $email_from);
        $stmt->bindParam(":email_to", $email_to);
        $stmt->bindParam(":wallet_to", $wallet_to);
        $stmt->bindParam(":wallet_from", $wallet_from);
        $stmt->bindParam(":amount", $amount);
        $stmt->execute();
        
        $query = "SELECT crypto, momo FROM users WHERE email = :email_from";
        $stmt = $this->dbConn->prepare($query);
        $stmt->bindParam(":amount", $amount);
        $stmt->bindParam(":email_from", $email_from);
        $stmt->execute();
        $sender = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if($wallet_to == "crypto"){
            $query = "SELECT crypto FROM users WHERE email = :email_to";
            $stmt = $this->dbConn->prepare($query);
            $stmt->bindParam(":amount", $amount);
            $stmt->bindParam(":email_to", $email_to);
            $stmt->execute();
            $receipient = $stmt->fetch(PDO::FETCH_ASSOC);
            
            $new_amount = $amount + receipient['crypto'];
            $new_amount_two = sender['crypto'] - $amount;
            
            $query = "UPDATE users SET crypto = :amount WHERE email = :email_to";
            $stmt = $this->dbConn->prepare($query);
            $stmt->bindParam(":amount", $new_amount);
            $stmt->bindParam(":email_to", $email_to);
            $stmt->execute();
            
            $query = "UPDATE users SET crypto = :amount WHERE email = :email_from";
            $stmt = $this->dbConn->prepare($query);
            $stmt->bindParam(":amount", $new_amount_two);
            $stmt->bindParam(":email_from", $email_from);
            $stmt->execute();
        } else if($wallet_to == "mobile") {
            $query = "SELECT momo FROM users WHERE email = :email_to";
            $stmt = $this->dbConn->prepare($query);
            $stmt->bindParam(":amount", $amount);
            $stmt->bindParam(":email_to", $email_to);
            $stmt->execute();
            $receipient = $stmt->fetch(PDO::FETCH_ASSOC);
            
            $new_amount = $amount + receipient['momo'];
            $new_amount_two = sender['momo'] - $amount;
            
            $query = "UPDATE users SET momo = :amount WHERE email = :email_to";
            $stmt = $this->dbConn->prepare($query);
            $stmt->bindParam(":amount", $new_amount);
            $stmt->bindParam(":email_to", $email_to);
            $stmt->execute();
            
            $query = "UPDATE users SET momo = :amount WHERE email = :email_from";
            $stmt = $this->dbConn->prepare($query);
            $stmt->bindParam(":amount", $new_amount_two);
            $stmt->bindParam(":email_from", $email_from);
            $stmt->execute();
        }

        $stmt = $this->dbConn->prepare("SELECT * FROM transfers WHERE email_from = :email_from ORDER BY id DESC LIMIT 1");
        $stmt->bindParam(":email_from", $email_from);
        $stmt->execute();
        $transaction = $stmt->fetch(PDO::FETCH_ASSOC);

        $data = ['transaction_info' => ['transaction_id' => $transaction['id'], 'from' => $transaction['wallet_from'], 'to' => $transaction['wallet_to'], 'amount' => $transaction['amount']], 'message' => 'Transfer completed successfully'];
        $this->returnResponse(SUCCESS_RESPONSE, $data);
    }