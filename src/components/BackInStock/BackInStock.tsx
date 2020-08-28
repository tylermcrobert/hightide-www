/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import React, { useState, useContext } from 'react'
import qs from 'querystring'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Box from 'components/Box'
import { Input } from 'components/FormElements'
import { log } from 'logrocket'
import { ProductCtx, ProductOptions } from 'templates/Product'
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

  return fetch(url).then(res => {
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

type BackInStockProps = {
  onClose: () => void
}

const BackInStock: React.FC<BackInStockProps> = ({ onClose }) => {
  const ctx = useContext(ProductCtx) as any

  const productId = parseFloat(
    Buffer.from(ctx.productData.id, 'base64')
      .toString()
      .split('Product/')[1]
  )

  const variantId = parseFloat(
    Buffer.from(ctx.currentVariant.id, 'base64')
      .toString()
      .split('ProductVariant/')[1]
  )

  const [email, setEmail] = useState<string>('')
  const [errors, setErrors] = useState<string>('')

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchBackInStock({
      email,
      variantId,
      productId,
    }).then(res => {
      if (res.errors) {
        setErrors(res.errors[Object.keys(res.errors)[0]][0])
      } else {
        onClose()
      }
    })
  }

  return (
    <>
      <S.Wrapper className="js-wrapper" onClick={onClose}>
        <S.Window onClick={e => e.stopPropagation()}>
          <Box mb={1}>
            <Heading headingStyle={1} as="h2">
              We&apos;ll let you know
            </Heading>
          </Box>
          <ProductOptions />
          <p>
            Register your email receive an email as soon as this becomes
            available again.
          </p>

          <form onSubmit={handleForm}>
            <Box mb={3}>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Box>
            {errors && <p>{errors}</p>}
            <S.ButtonWrap>
              <Button role="button">Notify when available</Button>
            </S.ButtonWrap>
          </form>
        </S.Window>
      </S.Wrapper>
      <S.Shadow onClick={() => onClose()} />
    </>
  )
}

export default BackInStock
