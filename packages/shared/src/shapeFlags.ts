export const enum ShapeFlags {
  ELEMENT = 1, // 1 元素是1
  FUNCTIONAL_COMPONENT = 1 << 1, // 10  组件是2
  STATEFUL_COMPONENT = 1 << 2, // 100 有状态组件是4
  TEXT_CHILDREN = 1 << 3, // 1000 文本节点是8
  ARRAY_CHILDREN = 1 << 4, // 数组子节点
  SLOTS_CHILDREN = 1 << 5, // 插槽子节点
  TELEPORT = 1 << 6,
  SUSPENSE = 1 << 7,
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,
  COMPONENT_KEPT_ALIVE = 1 << 9,
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT
}
