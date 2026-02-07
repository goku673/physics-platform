'use client'

import { useState } from 'react'

export function ScientificCalculator() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState<number | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [newNumber, setNewNumber] = useState(true)

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num)
      setNewNumber(false)
    } else {
      setDisplay(display === '0' ? num : display + num)
    }
  }

  const handleOperation = (op: string) => {
    const currentValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(currentValue)
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation)
      setDisplay(String(result))
      setPreviousValue(result)
    }

    setOperation(op)
    setNewNumber(true)
  }

  const calculate = (prev: number, current: number, op: string): number => {
    switch (op) {
      case '+':
        return prev + current
      case '-':
        return prev - current
      case '*':
        return prev * current
      case '/':
        return prev / current
      case '^':
        return Math.pow(prev, current)
      case 'mod':
        return prev % current
      default:
        return current
    }
  }

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const result = calculate(previousValue, parseFloat(display), operation)
      setDisplay(String(result))
      setPreviousValue(null)
      setOperation(null)
      setNewNumber(true)
    }
  }

  const handleScientific = (func: string) => {
    const value = parseFloat(display)
    let result = 0

    switch (func) {
      case 'sin':
        result = Math.sin((value * Math.PI) / 180)
        break
      case 'cos':
        result = Math.cos((value * Math.PI) / 180)
        break
      case 'tan':
        result = Math.tan((value * Math.PI) / 180)
        break
      case 'sqrt':
        result = Math.sqrt(value)
        break
      case 'log':
        result = Math.log10(value)
        break
      case 'ln':
        result = Math.log(value)
        break
      case 'e^x':
        result = Math.exp(value)
        break
      case '1/x':
        result = 1 / value
        break
      default:
        result = value
    }

    setDisplay(String(result))
    setNewNumber(true)
  }

  const handleClear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setNewNumber(true)
  }

  const handleDecimal = () => {
    if (newNumber) {
      setDisplay('0.')
      setNewNumber(false)
    } else if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  return (
    <div className="glass-effect rounded-lg p-6 max-w-md">
      <h3 className="text-lg font-bold text-foreground mb-4">Calculadora Científica</h3>

      {/* Display */}
      <div className="bg-background rounded-lg p-4 mb-4 text-right">
        <p className="text-muted-foreground text-sm mb-2">
          {previousValue !== null && operation ? `${previousValue} ${operation}` : ''}
        </p>
        <p className="text-4xl font-bold text-primary font-mono break-all">{display}</p>
      </div>

      {/* Scientific Functions */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {['sin', 'cos', 'tan', 'sqrt'].map((func) => (
          <button
            key={func}
            onClick={() => handleScientific(func)}
            className="py-2 rounded bg-card hover:bg-border transition text-sm font-medium text-foreground"
          >
            {func}
          </button>
        ))}
        {['log', 'ln', 'e^x', '1/x'].map((func) => (
          <button
            key={func}
            onClick={() => handleScientific(func)}
            className="py-2 rounded bg-card hover:bg-border transition text-sm font-medium text-foreground"
          >
            {func}
          </button>
        ))}
      </div>

      {/* Number Pad */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => handleNumber(String(num))}
            className="py-3 rounded bg-card hover:bg-border transition font-bold text-foreground"
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => handleOperation('/')}
          className="py-3 rounded bg-primary hover:opacity-90 transition font-bold text-primary-foreground"
        >
          ÷
        </button>

        {[4, 5, 6].map((num) => (
          <button
            key={num}
            onClick={() => handleNumber(String(num))}
            className="py-3 rounded bg-card hover:bg-border transition font-bold text-foreground"
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => handleOperation('*')}
          className="py-3 rounded bg-primary hover:opacity-90 transition font-bold text-primary-foreground"
        >
          ×
        </button>

        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => handleNumber(String(num))}
            className="py-3 rounded bg-card hover:bg-border transition font-bold text-foreground"
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => handleOperation('-')}
          className="py-3 rounded bg-primary hover:opacity-90 transition font-bold text-primary-foreground"
        >
          −
        </button>

        <button
          onClick={() => handleNumber('0')}
          className="py-3 rounded bg-card hover:bg-border transition font-bold text-foreground col-span-2"
        >
          0
        </button>
        <button
          onClick={handleDecimal}
          className="py-3 rounded bg-card hover:bg-border transition font-bold text-foreground"
        >
          .
        </button>
        <button
          onClick={() => handleOperation('+')}
          className="py-3 rounded bg-primary hover:opacity-90 transition font-bold text-primary-foreground"
        >
          +
        </button>
      </div>

      {/* Additional Operations */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <button
          onClick={() => handleOperation('^')}
          className="py-2 rounded bg-secondary hover:opacity-90 transition font-bold text-secondary-foreground"
        >
          x^y
        </button>
        <button
          onClick={() => handleOperation('mod')}
          className="py-2 rounded bg-secondary hover:opacity-90 transition font-bold text-secondary-foreground"
        >
          mod
        </button>
      </div>

      {/* Control Buttons */}
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={handleClear}
          className="py-3 rounded bg-destructive hover:opacity-90 transition font-bold text-destructive-foreground"
        >
          C
        </button>
        <button
          onClick={() => handleOperation('/')}
          className="py-3 rounded bg-accent hover:opacity-90 transition font-bold text-accent-foreground"
        >
          ←
        </button>
        <button
          onClick={handleEquals}
          className="py-3 rounded bg-primary hover:opacity-90 transition font-bold text-primary-foreground"
        >
          =
        </button>
      </div>
    </div>
  )
}
