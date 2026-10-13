#i2c #peripherics #arm #raspberrypi #drivers #gpio #programming 
# Raspberry pi I2C
---
Pour information especifique par rapport le bus I2C [5d2-ci-i2c](5d2-ci-i2c.md)

On a besoin d’installer le package i2c-toolfs pour utiliser l’i2c de la carte Raspberry pi :

```bash
sudo apt install -y i2c-tools 
```

```bash
sudo raspi-config
```

```
i2cdetect
```

----

https://arduinofactory.fr/raspberry-pi-i2c/