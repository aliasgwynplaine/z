#kernel #drivers #fr #sorbonne
# pilotes dans linux
---
Les pilotes sont associés au dispositifs (devices) et on le traitera de manière indifférencié.

Les pilotes sont accessibles dans la partition devfs dans `/dev/`.
+ character -> échange d'octets (char) [1d8b-linux-char-device](1d8b-linux-char-device.md)
+ block -> échange des bloques d'octets [1d8c-linux-block-devices](1d8c-linux-block-devices.md)
+ network -> contrôle des périphériques réseau [1d8d-linux-network-device](1d8d-linux-network-device.md)

L'identification des pilotes est fait comme dans UNIX: avec le major et minor [1d11a-unix-drivers](1d11a-unix-drivers.md).

Concevoir un pilote de périphérique [1d8a1-linux-drivers-programming](1d8a1-linux-drivers-programming.md)
