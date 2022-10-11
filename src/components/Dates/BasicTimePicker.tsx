import type { TimePickerProps } from 'antd'
import { TimePicker } from 'antd'
import moment from 'moment'

function BasicTimePicker(props: TimePickerProps) {
  const { value } = props
  const params = {...props}

  // 如果值不是moment类型则进行转换
  if (!moment.isMoment(value)) params.value = moment(value)

  return (
    <TimePicker
      {...params}
    />
  )
}

export default BasicTimePicker