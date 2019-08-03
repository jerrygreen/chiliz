// eslint-disable-next-line no-unused-vars
import { h, Component } from 'preact'
import moment from 'moment'
import VKButton from 'components/VKButton/VKButton'

import urpc from 'assets/urpc.png'
import './App.css'

// const { REACT_APP_DOMAIN_URL } = process.env
const image = new window.URL(urpc, window.location.origin)

const App = () => {
  const odd = moment().isoWeek() % 2 === 1
  const chiliz = odd ? 'числитель' : 'знаменатель'
  const startDay = moment().weekday(1).format('DD/MM')
  const endDay = moment().weekday(7).format('DD/MM')
  const title = `На этой неделе "${chiliz}"! (${startDay} - ${endDay})`
  return (
    <div className='App'>
      <a className='contact' href='https://vk.com/write25053099' target='_blank' rel='noopener noreferrer'>
        Обратная связь
      </a>
      <div className='chiliz'>
        <div className='chilizWrapper'>
          <div className='subtitle'>На этой неделе...</div>
          <div className='title'>{chiliz}</div>
          <div className='share'>
            <VKButton
              url={'http://chiliz.ru/'}
              title={title}
              image={image}
              noparse
            />
          </div>
        </div>
      </div>
      <div className='hint'>
        Данные обновляются в 00:00 с наступлением понедельника. Используется время, установленное на вашем устройстве
      </div>
    </div>
  )
}

export default App
