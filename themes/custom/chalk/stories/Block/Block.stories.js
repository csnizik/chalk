import { createBlock } from './Block'

export default {
  title: 'Example/Block',
  render: ({ label }) => {
    return createBlock({ label })
  },
  argTypes: {
    label: { control: 'text' },
  },
}

export const Primary = { args: { primary: true, label: 'Block' } }
