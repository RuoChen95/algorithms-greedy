# Assignment 1

## Description

In this programming problem and the next you'll code up the greedy algorithm from the lectures on Huffman coding.

Download the text file below.

> huffman.txt

This file describes an instance of the problem. It has the following format:

[weight of symbol #1]

[weight of symbol #2]

...

For example, the third line of the file is "6852892," indicating that the weight of the second symbol of the alphabet is 6852892. (We're using weights instead of frequencies, like in the "*A More Complex Example*" video.)

Your task in this problem is to run the Huffman coding algorithm from lecture on this data set. *What is the maximum length of a codeword in the resulting Huffman code?*

ADVICE: If you're not getting the correct answer, try debugging your algorithm using some small test cases. And then post them to the discussion forum!

## Resource

- class ppt: in the [intro](./resource/algo2-greedy-huffman3-typed.pdf); [example](./resource/algo2-greedy-huffman4-typed.pdf)
- wiki definition: The algorithm derives this table from the estimated probability or frequency of occurrence (weight) for each possible value of the source symbol. As in other entropy encoding methods, more common symbols are generally represented using fewer bits than less common symbols.
- code example in python using class to show binary tree: https://blog.csdn.net/sinat_16968575/article/details/44625743
- the leetcode question about tree: "standard" js data structure
- using class in JS(in Chinese): http://www.ruanyifeng.com/blog/2012/07/three_ways_to_define_a_javascript_class.html

# Assignment 2
Continuing the previous problem, what is the minimum length of a codeword in your Huffman code?

# Assignment 3

## Description

In this programming problem you'll code up the dynamic programming algorithm for computing a maximum-weight independent set of a path graph.

Download the text file below.

> mwis.txt

This file describes the weights of the vertices in a path graph (with the weights listed in the order in which vertices appear in the path). It has the following format:

[weight of first vertex]

[weight of second vertex]

...

For example, the third line of the file is "6395702," indicating that the weight of the second vertex of the graph is 6395702.

Your task in this problem is to run the dynamic programming algorithm (and the reconstruction procedure) from lecture on this data set. The question is: of the vertices 1, 2, 3, 4, 17, 117, 517, and 997, which ones belong to the maximum-weight independent set? (By "vertex 1" we mean the first vertex of the graph---there is no vertex 0.) In the box below, enter a 8-bit string, where the ith bit should be 1 if the ith of these 8 vertices is in the maximum-weight independent set, and 0 otherwise. For example, if you think that the vertices 1, 4, 17, and 517 are in the maximum-weight independent set and the other four vertices are not, then you should enter the string 10011010 in the box below.

## Resource

- 获取value的实现：algo2-dp-wis3-typed.pdf
- 获取具体index的实现：algo2-dp-wis4-typed.pdf