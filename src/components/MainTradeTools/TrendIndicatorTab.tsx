import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import useMobileMediaQuery from '@/utils/useMobileMediaQuery'

function createData(
  name: string,
  updatedAt1M: string,
  updatedAt5M: string,
  updatedAt15M: string,
  updatedAt30M: string,
) {
  return { name, updatedAt1M, updatedAt5M, updatedAt15M, updatedAt30M }
}

const rows = [
  createData('EUR/USD', 'red', 'blue', 'green', 'yellow'),
  createData('EUR/GBP', 'red', 'green', 'blue', 'yellow'),
  createData('EUR/JPY', 'yellow', 'blue', 'green', 'yellow'),
  createData('EUR/CAD', 'green', 'blue', 'red', 'yellow'),
  createData('GBP/USD', 'red', 'green', 'yellow', 'blue'),
  createData('GBP/JPY', 'yellow', 'green', 'red', 'blue'),
  createData('USD/JPY', 'green', 'red', 'blue', 'yellow'),
  createData('AUD/JPY', 'blue', 'green', 'yellow', 'red'),
  createData('EUR/CHF', 'green', 'blue', 'red', 'yellow'),
  createData('USD/CHF', 'red', 'green', 'blue', 'yellow'),
  createData('AUD/CAD', 'red', 'blue', 'green', 'yellow'),
]

export const TrendIndicatorTab = () => {
  const isMobile = useMobileMediaQuery()
  function getBackgroundColor(data: string) {
    switch (data.toLowerCase()) {
      case 'red':
        return 'red'
      case 'blue':
        return 'blue'
      case 'green':
        return 'green'
      case 'yellow':
        return 'yellow'
      case 'purple':
        return 'purple'
      default:
        return 'white' // Default background color
    }
  }
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Trend Indicator Tab">
        <TableHead>
          <TableRow>
            <TableCell>Ativos</TableCell>
            <TableCell align="center">1M</TableCell>
            <TableCell align="center">5M</TableCell>
            <TableCell align="center">15M</TableCell>
            <TableCell align="center">30M</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell
                sx={{ color: '#505056', fontSize: 16 }}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell align="center">
                <span
                  style={{
                    backgroundColor: getBackgroundColor(row.updatedAt1M),
                  }}
                  className={`w-[18px] h-[18px] rounded-full block ${
                    isMobile ? 'mx-auto' : 'ml-auto'
                  }`}
                />
              </TableCell>
              <TableCell align="center">
                {' '}
                <span
                  style={{
                    backgroundColor: getBackgroundColor(row.updatedAt5M),
                  }}
                  className="w-[18px] h-[18px] rounded-full block mx-auto"
                />
              </TableCell>
              <TableCell align="center">
                {' '}
                <span
                  style={{
                    backgroundColor: getBackgroundColor(row.updatedAt15M),
                  }}
                  className="w-[18px] h-[18px] rounded-full block mx-auto"
                />
              </TableCell>
              <TableCell align="center">
                {' '}
                <span
                  style={{
                    backgroundColor: getBackgroundColor(row.updatedAt30M),
                  }}
                  className="w-[18px] h-[18px] rounded-full block mx-auto"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
