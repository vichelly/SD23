import { useState, useEffect, useRef } from 'react'
import * as S from './styles'
import { motion } from 'framer-motion'
import Link from 'next/link'

const imgs2017 = [
  '2017/foto-1.jpg',
  '2017/foto-2.jpg',
  '2017/foto-3.jpg',
  '2017/foto-4.jpg',
  '2017/foto-5.jpg'
]

const imgs2018 = [
  '2018/foto-1.jpg',
  '2018/foto-2.jpg',
  '2018/foto-3.jpg',
  '2018/foto-4.jpg',
  '2018/foto-5.jpg'
]

const imgs2019 = [
  '2019/foto-1.jpg',
  '2019/foto-2.jpg',
  '2019/foto-3.jpg',
  '2019/foto-4.jpg',
  '2019/foto-5.jpg'
]

const imgs2020 = [
  '2020/foto-1.jpg',
  '2020/foto-2.png',
  '2020/foto-3.png',
  '2020/foto-4.png',
  '2020/foto-5.png'
]

const imgs2021 = [
  '2021/foto-1.jpg',
  '2021/foto-2.png',
  '2021/foto-3.png',
  '2021/foto-4.png',
  '2021/foto-5.png'
]

const imgs2022 = [
  '2022/foto-1.jpg',
  '2022/foto2.png',
  '2022/foto-3.png',
  '2022/foto-4.png',
  '2022/foto-5.png'
]

function EditionContent() {
  const corousel = useRef()
  const [width, setWidth] = useState(0)
  const [yaer, setYaer] = useState(imgs2018)
  const [classActive, setClassActive] = useState('2018')

  useEffect(() => {
    setWidth(corousel.current?.scrollWidth - corousel.current?.offsetWidth)
  }, [])

  let activeClass = ''

  function changeArray(ano, classTest) {
    setYaer(ano)
    setClassActive(classTest)
  }

  //console.log(yaer)
  //console.log(classActive)
  console.log(activeClass)

  return (
    <S.DivPrincipal>
      <S.Container>
      <Link href="/">
        <S.Frame src="/img/Frame 38.png" alt="Logo ScrumDay 23" />                
      </Link>

        <S.Title>Edições anteriores</S.Title>

        <S.Filter>
          <ul>
            <li
              className={classActive == '2017' ? 'active' : ''}
              onClick={() => changeArray(imgs2017, '2017')}
            >
              2017
            </li>
            <li
              className={classActive == '2018' ? 'active' : ''}
              onClick={() => changeArray(imgs2018, '2018')}
            >
              2018
            </li>
            <li
              className={classActive == '2019' ? 'active' : ''}
              onClick={() => changeArray(imgs2019, '2019')}
            >
              2019
            </li>
            <li
              className={classActive == '2020' ? 'active' : ''}
              onClick={() => changeArray(imgs2020, '2020')}
            >
              2020
            </li>
            <li
              className={classActive == '2021' ? 'active' : ''}
              onClick={() => changeArray(imgs2021, '2021')}
            >
              2021
            </li>
            <li
              className={classActive == '2022' ? 'active' : ''}
              onClick={() => changeArray(imgs2022, '2022')}
            >
              2022
            </li>
          </ul>
        </S.Filter>

        <motion.div
          ref={corousel}
          className="carrousel"
          whileTap={{ cursor: 'grabbing' }}
        >
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {yaer.map((i) => (
              <motion.div
                animate={{ x: 0 }}
                whileHover={{
                  scale: 1.1
                }}
                transition={{ duration: 0.32 }}
                className="itemImg"
                key={i}
              >
                <img src={`/img/assets/imagens/${i}`} alt="Foto evento" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </S.Container>
    </S.DivPrincipal>
  )
}

export default EditionContent
