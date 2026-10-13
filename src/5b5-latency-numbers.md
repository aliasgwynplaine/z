#computers #computerscience #en #sorbonne
# Latency numbers
---

| Operation                                 |  Time in ns | Time in ms |
| ----------------------------------------- | ----------: | ---------: |
| L1 cache reference                        |           1 |            |
| Branch misprediction                      |           3 |            |
| L2 cache reference                        |           4 |            |
| Mutex lock/unlock                         |          17 |            |
| Main memory reference                     |         100 |            |
| Compress 1 kB with Zippy                  |       2,000 |      0.002 |
| Read 1 MB sequentially from memory        |      10,000 |      0.010 |
| Send 2 kB over 10 Gbps network            |       1,600 |     0.0016 |
| SSD 4kB Random Read                       |      20,000 |      0.020 |
| Read 1 MB sequentially from SSD           |   1,000,000 |          1 |
| Round trip within same datacenter         |     500,000 |        0.5 |
| Read 1 MB sequentially from disk          |   5,000,000 |          5 |
| Read 1 MB sequentially from 1Gbps network |  10,000,000 |         10 |
| Disk seek                                 |  10,000,000 |         10 |
| TCP packet round trip between continents  | 150,000,000 |        150 |

	


---



