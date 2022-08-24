import {Typography} from 'antd'
import '../atoms/score-card.css'

type IProps = {
  score: number
}

export const ScoreCard = ({score}: IProps) => {
  const {Title, Text} = Typography

  return (
    <div className='score-card-wrapper'>
      <Title level={4}>Score</Title>
      <Text className='score-number'>{score.toFixed(1)}</Text>
    </div>
  )
}