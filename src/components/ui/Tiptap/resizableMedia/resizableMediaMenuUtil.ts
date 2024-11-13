/* @unocss-include */

import { AlignCenterVertical, AlignEndVertical, AlignStartVertical, Trash } from "lucide-vue-next"

interface ResizableMediaAction {
  tooltip: string,
  icon: string

  action?: (updateAttributes: (o: Record<string, any>) => any) => void
  isActive?: (attrs: Record<string, any>) => boolean
  delete?: (d: () => void) => void
}

export const resizableMediaActions: ResizableMediaAction[] = [
  {
    tooltip: 'left',
    action: (updateAttributes) => updateAttributes({
      dataAlign: 'left',
      dataFloat: null,
    }),
    icon: AlignStartVertical,
    isActive: (attrs) => attrs.dataAlign === 'left'
  },
  {
    tooltip: 'center',
    action: (updateAttributes) => updateAttributes({
      dataAlign: 'center',
      dataFloat: null,
    }),
    icon: AlignCenterVertical,
    isActive: (attrs) => attrs.dataAlign === 'center'
  },
  {
    tooltip: 'right',
    action: (updateAttributes) => updateAttributes({
      dataAlign: 'right',
      dataFloat: null,
    }),
    icon: AlignEndVertical,
    isActive: (attrs) => attrs.dataAlign === 'right'
  },
  {
    tooltip: 'Delete',
    icon: Trash,
    delete: (deleteNode) => deleteNode()
  }
]