import SubmitPage from 'templates/SubmitPage'

export default function Submit() {
  return <SubmitPage />
}

Submit.getInitialProps = async ctx => {
  console.log(ctx)
  return {}
}
