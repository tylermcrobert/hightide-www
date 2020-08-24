/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import React from 'react'
import qs from 'querystring'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Box from 'components/Box'
import { Input } from 'components/FormElements'
import S from './BackInStock.Styled'

type EmailOptions = {
  'notification[email]': string
  'notification[product_no]': number
  'variant[variant_no]': number
}

type StaticOptions = {
  shop: string
  'notification[quantity_required]': number
  'notification[accepts_marketing]': boolean
  'notification[customer_utc_offset]': number
}

type ReqParams = StaticOptions & EmailOptions

const BIS_URL = `https://app.backinstock.org/stock_notification/create.json`

const date = new Date()

const DEFAULT_OPTIONS: StaticOptions = {
  shop: 'hightidenyc.myshopify.com',
  'notification[quantity_required]': 1,
  'notification[accepts_marketing]': false,
  'notification[customer_utc_offset]': date.getTimezoneOffset(),
}

type BackInStockOptions = {
  email: string
  variantId: number
  productId: number
}

const fetchBackInStock = (options: BackInStockOptions) => {
  const params: ReqParams = {
    ...DEFAULT_OPTIONS,
    'notification[email]': options.email,
    'variant[variant_no]': options.variantId,
    'notification[product_no]': options.productId,
  }
  const url = `${BIS_URL}?${qs.stringify(params)}`

  fetch(url).then(res => {
    if (res.ok) {
      return res.json()
    }
    console.log('error')
    return null
  })
}

/**
 * Back in stock component
 */

type BackInStockProps = Omit<BackInStockOptions, 'email'>

const BackInStock: React.FC<BackInStockProps> = ({ variantId, productId }) => {
  const notify = (email: string) =>
    fetchBackInStock({
      email,
      variantId,
      productId,
    })

  return (
    <>
      <S.Wrapper>
        <S.Window>
          <Heading headingStyle={1} as="h2">
            Out of stock
          </Heading>
          <p>
            Sorry, we&apos;re sold out. Register your email address below to
            receive an email as soon as this becomes available again.
          </p>

          <form>
            <Box mb={3}>
              <Input type="email" placeholder="Email" />
            </Box>
            <Button
              onClick={() => notify('tyler@hightidenyc.com')}
              role="button"
            >
              Notify when available
            </Button>
          </form>
        </S.Window>
      </S.Wrapper>
      <S.Shadow />
    </>
  )
}

export default BackInStock
