/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 // 94. Binary Tree Inorder Traversal
 
var inorderTraversal = function(root) {
    let result = []

    const traverseNode =(node)=>{
        if(!node) return
        traverseNode(node.left)
        result.push(node.val)
        traverseNode(node.right)
    }
    traverseNode(root)
    return result
};

// Input: root = [1,null,2,3]
// Output: [1,3,2]