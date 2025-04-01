import {FrownOutlined} from '@ant-design/icons'
import {Empty, Flex} from 'antd'
import {Link} from 'react-router-dom'

import s from './not-found.module.scss';

function NotFound() {
  return (
    <Flex
      className={s.container}
      vertical
      justify='center'
      align='center'
    >
      <Empty
        className={s.empty}
        image={<FrownOutlined />}
        description="Такой страницы нет :("
      />
      <Link to="/" replace>
        Вернуться на главную
      </Link>
    </Flex>
  )
}

export default NotFound