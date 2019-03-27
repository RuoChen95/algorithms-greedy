# P1
## 问题描述
cluster的含义就是将图进行分组，例如分组成了2个cluster，那么这个cluster之间的距离是为被分组的edge中的*最小值*。
single-link clustering: 其实就是排序 + 点的合并 + 去重
## 基本思路
1. 借助kruskal的思路将边进行排序，排序的规则是边的长度由小到大；
2. 类似于计算karger min-cut的时候的合并，代码上只有一点需要修改：ind随机 => ind为0（由于0是长度最小的index）

# P2
## 问题描述
首先是数据的定义：
a：0 1 1 0 0 1 1 0 0 1 0 1 1 1 1 1 1 0 1 0 1 1 0 1
b：0 1 0 0 0 1 0 0 0 1 0 1 1 1 1 1 1 0 1 0 0 1 0 1
比较方式就是它们之间的不同有多少位，位3则a和b的距离为3

数据而且很大：不能直接进行edge的排序了。

其次换了个问法：k的最大值是多少，让这k个cluster之间的距离最小为3。需要让k从2开始不断增加，逼近到3的极限（目前不知道最大还是最小）。

## 基本思路

数据很大就是要加速，对于kruskal的算法就是要用并查集：在进行合并的时候合并leader，vertex不变。npm库有个周下载量六万的并查集：https://www.npmjs.com/package/union-find


1) I think you can reduce the problem size by pop identical vertices out in O(m) by doing it while reading the data and using a hash table.

2) Then, using hash table to find out every possible bits set can be for distance 1 and 2, the number of them is constant so it will be O(m) for each scan (since lookup takes O(1) from hash table).

3) Using Union-find data structure to merge them. It take O(mlogn)

Totally, it takes O(mlogn)

思路2：

- Convert each line in the input file into an int, using each int as a vertex label
- Don't try to sort the vertices. Use union-find data structure (leader hash-map) to map each vertex to its cluster leader, and put each vertex in its own cluster set.

