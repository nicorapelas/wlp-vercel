import React, { useContext, useEffect, useState } from 'react'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { FaInfoCircle } from 'react-icons/fa'

import NetworkChecker from '../../common/NetworkChecker'
import Loader from '../../common/loaders/fullScreenLoader/LoaderFullScreen'
import { Context as CardContext } from '../../../context/CardsContext'
import '../dashboard/dashboard.css'

const MyCards = () => {
  const navigate = useNavigate()

  const {
    state: { userCards, loading, networkError },
    fetchUsersCards,
    setMyCardToView,
  } = useContext(CardContext)

  useEffect(() => {
    fetchUsersCards()
  }, [])

  useEffect(() => {
    if (networkError) {
      navigate('/network-error')
    }
  }, [networkError])

  if (loading) {
    return <Loader />
  }

  useEffect(() => {
    console.log(`userCards:`, userCards)
  }, [userCards])

  const handleBackButtonPress = () => {
    navigate('/dashboard')
  }

  const handleRowClick = (card) => {
    setMyCardToView(card)
    navigate('/my-card-view')
  }

  if (!userCards || !Array.isArray(userCards) || userCards.length === 0) {
    return (
      <div className="card-info">
        <button className="nav-button" onClick={handleBackButtonPress}>
          Back
        </button>
        <div className="info-section">
          <h4>My Cards</h4>
          <p style={{ color: '#ffff' }}>No cards available.</p>
        </div>
      </div>
    )
  }

  if (!userCards || userCards.length === 0) {
    return (
      <div className="card-info">
        <button className="nav-button" onClick={handleBackButtonPress}>
          Back
        </button>
        <div className="info-section">
          <h4>My Cards</h4>
          <p style={{ color: '#ffff' }}>No cards available.</p>
        </div>
      </div>
    )
  }

  return <div>hello world..!</div>
}

export default MyCards
