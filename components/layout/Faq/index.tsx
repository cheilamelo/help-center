'use client'

import { Section } from '@/components/elements/Section'
import { Text } from '@/components/elements/Texts'
import Image from 'next/image'
import { useState } from 'react'

interface IFaqItemProps {
  title: string
  answer: string
  isOpen: boolean
  onClick: () => void
  isLast: boolean
}

const FaqItem = ({ title, answer, isOpen, onClick, isLast }: IFaqItemProps) => {
  return (
    <div
      className={`pb-6  border-b border-grayscale-400 ${
        isLast ? 'mb-0' : 'mb-6'
      }`}
    >
      <header onClick={onClick} className="cursor-pointer flex justify-between">
        <Text className="text-base font-medium">{title}</Text>
        <Image
          width="24"
          height="24"
          src={`/images/icons/icon-${isOpen ? 'minus' : 'plus'}.svg`}
          alt="Pergunta icone"
        />
      </header>

      <main
        className={`overflow-hidden transition-all ${isOpen ? 'h-20' : 'h-0'}`}
      >
        <Text className="text-grayscale-100 text-[14px] font-light mt-4 h-20 overflow-hidden">
          {answer}
        </Text>
      </main>
    </div>
  )
}

interface IFaq {
  data: Omit<IFaqItemProps, 'isOpen' | 'onClick' | 'isLast'>[]
  children?: React.ReactNode
}

export const FAQ = ({ data, children }: IFaq) => {
  const [questOpened, setQuestOpened] = useState<number | undefined>(0)

  const handleQuestionClick = (index: number) =>
    index === questOpened ? setQuestOpened(undefined) : setQuestOpened(index)

  return (
    <Section className="md:mb-16">
      {children}
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="mb-20 md:mb-0">
          {data.map((question, index) => {
            return (
              <FaqItem
                key={index}
                title={question.title}
                answer={question.answer}
                isOpen={questOpened === index}
                onClick={() => handleQuestionClick(index)}
                isLast={index === data.length - 1}
              />
            )
          })}
        </div>
      </div>
    </Section>
  )
}
