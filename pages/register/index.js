import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import RegisterSection from './_register'
import RegistrationModal from './_registration-modal'

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination:
        'https://docs.google.com/forms/d/e/1FAIpQLSecr3LRSCyK3N3ePzo4GsVokDf3R6_7TBHPLMAf7CXRC__VOA/viewform',
      permanet: false
    }
  }
}

const Register = () => {
  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    showModal ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset')
  }, [showModal])

  return (
    <Layout title="IGNITEMY2024 | Register">
      <RegisterSection />
      <RegistrationModal showModal={showModal} closeModal={() => setShowModal(false)} />
    </Layout>
  )
}

export default Register
