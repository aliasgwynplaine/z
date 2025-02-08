#kerberos #activedirectory #cybersec #fr 
# Le workflow de Kerberos
---
Tout d'abord, le client n'a aucun ticket. Du coup, il demande un TGT ([3b3d1-kerberos-ticket-tgt](3b3d1-kerberos-ticket-tgt.md)) en envoyant un Kerberos Authentication Service Request qui contient le nom d'usager, le nom du service (maintenant kerberos), et un _timestamp_ chiffré avec le hash NTLM ([2a1a-ntlm-hash-function](2a1a-ntlm-hash-function.md)) de l'usager. 

```
user ----------------->  KDC (DC)
	  [1] KRB_AS_REQ
	 <-----------------
	  [2] KRB_AS_REP   
	 -----------------> 
	  [3] KRB_TGT_REQ
	 <-----------------
	  [4] KRB_TGT_REP   
```
