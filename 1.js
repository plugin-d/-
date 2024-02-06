function TNode(value) {
	this.value = value;
	this.next = null;
	this.pre = null;
}

const node1 = new TNode(1);
const node2 = new TNode(2);
const node3 = new TNode(3);
const node4 = new TNode(4);
const node5 = new TNode(5);
const node6 = new TNode(6);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node2.pre = node1;
node3.pre = node2;
node4.pre = node3;
node5.pre = node4;
node6.pre = node5;
function getList(node = node1) {
	if (node === null) return;
	console.log(node);
	getList(node.next);
}
/**
 * @description 前面插入
 * @param {*} node1 要插入的节点
 * @param {*} node2 插入节点的位置节点
 */
function insertBefore(node, node2) {
	if (node2.pre) {
		node2.pre.next = node;
		node2.pre = node;
		node.pre = node2.pre;
	}
	node.next = node2;
}
insertBefore(new TNode(99), node2);
getList(node1);
