import { Section } from '@/components/elements/Section'
import { Text } from '@/components/elements/Texts'
import { list_card_contact_us } from './content'
import { Card } from './component/Card'

export default function ContactUs() {
  return (
    <Section className="mb-8">
      <Text className="text-base font-medium mb-4">Entre em contato</Text>
      <div className="flex justify-between">
        {list_card_contact_us.map((item, index) => (
          <Card
            key={index}
            src={item.src}
            alt={item.title}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </Section>
  )
}
