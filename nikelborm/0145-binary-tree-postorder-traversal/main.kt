// https://leetcode.com/problems/binary-tree-postorder-traversal/description/

data class TreeNode(
  val `val`: Int
  // , val left: TreeNode? = null
  // , val right: TreeNode? = null
) {
  var left: TreeNode? = null
  var right: TreeNode? = null
}

fun node(left: TreeNode?, value: Int, right: TreeNode?): TreeNode {
  val newNode = TreeNode(value)
  newNode.left = left
  newNode.right = right
  // val newNode = TreeNode(value, left, right)
  return newNode
}

enum class NodeState {
  JustArrived,
  LeftBranchCompleted,
  RightBranchCompleted
}

data class StackEntry(val node: TreeNode, var status: NodeState) {}


class Solution {
  fun postorderTraversal(root: TreeNode?): List<Int> {
    if (root === null) return listOf<Int>();

    val stack = mutableListOf(
      StackEntry(root, NodeState.JustArrived)
    )
    val result = mutableListOf<Int>();

    while(!stack.isEmpty()) {
      val cur = stack.last()
      if(cur.status === NodeState.JustArrived) {
        val left = cur.node.left
        cur.status = NodeState.LeftBranchCompleted
        if(left !== null) {
          stack.add(StackEntry(left, NodeState.JustArrived))
          continue
        }
      }

      if(cur.status === NodeState.LeftBranchCompleted) {
        val right = cur.node.right;
        cur.status = NodeState.RightBranchCompleted
        if(right !== null) {
          stack.add(StackEntry(right, NodeState.JustArrived))
          continue
        }
      }

      if(cur.status === NodeState.RightBranchCompleted) {
        result.add(cur.node.`val`)
        stack.removeLast()
      }
    }

    return result.toList()
  }
}

val sol = Solution()

val test = mapOf(
  node(null, 1, node(TreeNode(3), 2, null)) to listOf(3, 2, 1),

  node(
    node(TreeNode(1), 3, TreeNode(2)),
    7,
    node(TreeNode(4), 6, TreeNode(5))
  ) to listOf(1, 2, 3, 4, 5, 6, 7)
)

for (i in test) {
  val result = sol.postorderTraversal(i.key);

  if (result != i.value)
    throw Exception("postorderTraversal(${i.key})=${result}. Expected ${i.value}")
  println("postorderTraversal(${i.key}) is fine ❤️ ")
}
