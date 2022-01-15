import Head from 'next/head'
import Image from 'next/image'
import { DataStore } from 'aws-amplify'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { League } from '../src/models'

export default function Home({leagues}) {
  return (
    
    <h1 className='text-green-500'>{leagues.map((league) => {

      return <h1> {league.title} </h1>

    })}</h1>
  )
}


export async function getStaticProps () {
  const leagueData = await DataStore.query(League)
  const data = JSON.parse(JSON.stringify(leagueData))

  return {
    props: {
      leagues: data
    }
  }

}