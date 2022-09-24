//import Head from 'next/head'
//import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'
//import { Navbar } from '../../components/Navbar'

export default function PricingPage() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
        
        <h1 className={"title"}>
          Ir a <Link href="/contact">Contact!</Link>
        </h1>

        <p className={"description"}>
          Editar{' '}
          <code className={"code"}>pages/pricing/index.js</code>
        </p>
    </MainLayout>
  )
}
