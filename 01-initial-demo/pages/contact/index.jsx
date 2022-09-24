//import Head from 'next/head'
//import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'
//import { Navbar } from '../../components/Navbar'

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
        
        <h1 className={"title"}>
          Ir a <Link href="/pricing">Pricing!</Link>
        </h1>

        <p className={"description"}>
          Editar{' '}
          <code className={"code"}>pages/contact/index.js</code>
        </p>
    </MainLayout>
  )
}
