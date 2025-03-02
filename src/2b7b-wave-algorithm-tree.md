#algorithmes #fr #distributedalgorithms #sorbonne
# L'algorithme de l'arbre
---
algorithme symétrique

```
R_p : { un message <> arrive de q }
	réception de <>;
	Rec_p[q] = true;

S_p : { exists q in Vois_p : for all r in Vois_p, r != q : Rec_p[r] et !sent_p }
	envoie <> à q;
	sent_p = true;

D_p : { forall q in Vois_p : Rec_p[q] }
	décision
```



---
