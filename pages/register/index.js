import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import RegisterSection from './_register'
import RegistrationModal from './_registration-modal'

const Register = () => {
  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    showModal ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset')
  }, [showModal])

  return (
    <Layout title="IGNITEMY2023 | Register">
      <RegisterSection />
      <RegistrationModal showModal={showModal} closeModal={() => setShowModal(false)} />
    </Layout>
  )
}

export default Register
