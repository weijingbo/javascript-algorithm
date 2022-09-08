
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
 var printTree = function(root) {
    var ans = []
    var height = getHeight(root);
    var m = height + 1;
    var n = (1 << (height + 1)) - 1;
    console.log(m,n);
    for (let i = 0; i < m; i++) {
        let tmp = [];
        for (let j = 0; j < n; j++) {
            tmp.add("");
        }
        ans.add(tmp);
    }
    dfs(root, 0, (n - 1) / 2);
    return ans;
};

var getHeight = function(root){
    if (root == null) return 0;
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

var dfs = function(root, row, col) {
    if (root == null) return;
    res.get(row).set(col, Integer.toString(root.val));
    if (root.left != null) dfs(root.left, row + 1, col - (1 << (height - row - 1)));
    if (root.right != null) dfs(root.right, row + 1, col + (1 << (height - row - 1)));
}