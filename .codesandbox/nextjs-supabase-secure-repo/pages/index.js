import { useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const runImport = async () => {
    setLoading(true)
    setMessage('Running import...')
    try {
      const res = await fetch('/api/import-shops', { method: 'POST' })
      const data = await res.json()
      setMessage(data.message || 'Done!')
    } catch (err) {
      setMessage('Error: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Supabase Shops Starter</h1>
      <button onClick={runImport} disabled={loading}>
        {loading ? 'Running...' : 'Run import_shops()'}
      </button>
      <p>{message}</p>
    </main>
  )
}
