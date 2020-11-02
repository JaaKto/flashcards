import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { fetchData } from "common/utils"
import * as S from "./AddFlashcard.styles"
import { NewFlashcard } from "./NewFlashcard"

export default () => {
  const [state, setState] = useState<any>([])
  const {
    location: { search, pathname },
  } = useHistory()

  const mockedResponse = {
    translations: [
      {
        source: '<strong class="headword">kotlet</strong>',
        target:
          'Kotelett <span class="genus"><acronym title="neuter">nt</acronym></span>',
      },
      {
        source:
          '<span class="example"><strong class="tilde">kotlet</strong> cielęcy/schabowy</span>',
        target:
          'Kalbs-/Schweinskotelett <span class="genus"><acronym title="neuter">nt</acronym></span>',
      },
      {
        source:
          '<span class="example"><strong class="tilde">kotlet</strong> mielony</span>',
        target:
          'B[o]ulette <span class="genus"><acronym title="feminine">f</acronym></span>',
      },
    ],
  }

  useEffect(() => {
    // fetchData(pathname.slice(1) + search, {
    //   method: "GET",
    //   headers: new Headers({
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //   }),
    // })
    //   .then((response: any) => {
    //     setState(response[0][0])
    //     console.log(response[0][0])
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    setState(mockedResponse)
  }, [])
  return (
    <S.FlashcardsContainer>
      <p dangerouslySetInnerHTML={{ __html: state.header }} />
      {state.translations &&
        state.translations.map((card: any) => (
          <NewFlashcard key={card.target} {...{ ...card }} />
        ))}
    </S.FlashcardsContainer>
  )
}
