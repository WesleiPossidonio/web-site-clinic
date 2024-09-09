import { useEffect, useState } from "react"
import { ContainerFeedInstagram, ContainerTitle, ContentFeedInstagram, LinkPost } from "./styled"
import api from "../../../../Services/api"
import { TextRegular, TitleText } from "../../../../Components"
import AOS from 'aos'

interface FeedInstragramProps {
  id: string
  caption: string
  media_type: 'VIDEO' | 'IMAGE'
  media_url: string
  permalink: string
}

export const FeedInstagram = () => {

  const [feedList, setFeedList] = useState<FeedInstragramProps[]>([])

  useEffect(() => {
    AOS.init()
  }, [])

  useEffect(() => {
    try {
      const getFeedInstagram = async () => {
        const feedInstagram = await api.get('feedInsta')
        const newFeedInstagram: FeedInstragramProps[] = feedInstagram.data.data
        setFeedList(newFeedInstagram)
      }

      getFeedInstagram()
    } catch (error) {
      console.log('Error ao buscar o feed do instagram =>', error)
    }

  }, [])
  return (
    <ContainerFeedInstagram>

      <ContainerTitle>
        <TitleText size="s" color='bg'>INSTAGRAM</TitleText>
        <TitleText size="l">Siga as Nossas Redes</TitleText>
      </ContainerTitle>

      <ContentFeedInstagram>
        {
          feedList.slice(0, 6).map(post => {
            return <LinkPost key={post.id} href={post.permalink} target="_blank" data-aos="zoom-in" data-aos-duration="1000">
              <TextRegular size="sm" color="white" weight={500}>{post.caption}</TextRegular>
              {
                post.media_type !== 'IMAGE' ? <video controls><source src={post.media_url} /></video> : <img src={post.media_url} alt="" />
              }
            </LinkPost>
          })
        }
      </ContentFeedInstagram>
    </ContainerFeedInstagram>
  )
}


