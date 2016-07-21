# Binary search tree
# node propertes: value, left_child, right_child
# all left_child values should be less than parent node,
# all right_child values should be greater than parent node

class Node
  attr_accessor :value, :left_child, :right_child

  def initialize(args={})
    @value       = args[:value]
    @left_child  = args[:left_child]
    @right_child = args[:right_child]
  end

  def has_any_children?
    left_child || right_child
  end

  def valid_node?
    if left_child
      left_check = left_child < value
      return left_check unless left_check
    end

    if right_child
      right_check = right_child > value
      return right_check
    end

    true
  end
end

class BinarySearchTree
  attr_accessor :root

  def initialize(value)
    @root = Node.new({value: value})
  end

  def add_node(node=root, value)
    if node.value < value
      if node.right_child
        add_node(node.right_child, value)
      else
        node.right_child = Node.new({value: value})
        return node.right_child
      end
      
    else
      if node.left_child
        add_node(node.left_child, value)
      else
        node.left_child = Node.new({value: value})
        return node.left_child
      end
    end
  end

  def balanced?
    # height of left and right should have no greater difference than 3
  end

  def rebalance
    # rebalance the tree
  end

  def valid?
    # all nodes are valid
  end

  def print_tree(tree=root)
    if tree.left_child
      print_tree(tree.left_child)
    end

    puts tree.value

    if tree.right_child
      print_tree(tree.right_child)
    end
  end

end

# runner code

tree = BinarySearchTree.new(10)
tree.add_node(20)
tree.add_node(5)
tree.add_node(15)
tree.add_node(35)
tree.add_node(30)
tree.add_node(7)
tree.add_node(11)

tree.print_tree
