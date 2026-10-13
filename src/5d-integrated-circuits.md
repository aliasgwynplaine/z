#electronics #integratedcircuits #sorbonne #fr
# Circuit integré 
---

quelques concepts en électronique [5d5-ic-electronics](5d5-ic-electronics.md)

## communications
La communication entre périphériques peut être vers signaux analogiques, signaux numériques, protocoles filaires et protocoles sans fils.

### transmission série et parallèle
+ parallèle. Les bits sont envoyés en parallèle les caractères sont envoyés en série. _a priori_ plus simple, mais tous les signaux doivent arriver en même temps, c'est donc cher et difficile pour les grandes distances à haute fréquence.
	+ 
+ série. Les bits de chaque caractères sont envoyés en série. nécessite un s érialiseur/désérialiseur, mais tous les bits arrivent dans l'ordre cela semble plus long, mais on peut augmenter la fréquence.
	+ RS232 [5d3-rs232](5d3-rs232.md)
	+ SPI [5d4-spi](5d4-spi.md)
	+ I2C [5d2-ci-i2c](5d2-ci-i2c.md)
	+ USB

[5d1-ci-gpio](5d1-ci-gpio.md)


