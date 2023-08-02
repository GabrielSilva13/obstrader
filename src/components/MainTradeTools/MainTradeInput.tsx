import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { ListSubheader, ListSubheaderProps, TextField } from '@mui/material'
import { CryptoPairs, OTCPairs } from '@/const'
import { forwardRef } from 'react'

interface Value {
  value: string
  title: string
}

type MainTradeInputProps = {
  labelText: string
  isSelect: boolean
  placeholderText?: string
  selectValues?: Value[]
  value?: string
  handleChange: (event: SelectChangeEvent) => void
  name: string
  hasSubGroups?: boolean
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  className: string
  required?: boolean
}

type MainTradeTextInputProps = MainTradeInputProps & {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const MainTradeTextInput = forwardRef(
  (
    {
      onChange,
      onBlur,
      name,
      labelText,
      placeholderText,
      value,
      className,
    }: MainTradeTextInputProps,
    ref,
  ) => (
    <TextField
      ref={ref as any}
      className={className}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      sx={{
        width: '100%',
        fontSize: 14,
        letterSpacing: '0.025em',
      }}
      id="outlined-basic"
      label={labelText}
      variant="outlined"
      placeholder={placeholderText}
    />
  ),
)

export const MainTradeSelect = forwardRef(
  (
    {
      selectValues,
      value,
      name,
      hasSubGroups,
      handleChange,
      onBlur,
      labelText,
      className,
      required,
    }: MainTradeInputProps,
    ref,
  ) => {
    function MyListSubheader(props: ListSubheaderProps) {
      return <ListSubheader {...props} />
    }

    return (
      <>
        <FormControl fullWidth>
          <InputLabel
            sx={{
              fontSize: 16,
              fontWeight: 500,
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.025em',
            }}
            id="demo-simple-select-label"
          >
            {labelText}
          </InputLabel>
          {hasSubGroups ? (
            <Select
              ref={ref as any}
              name={name}
              className={className}
              sx={{ fontSize: 14, fontWeight: 500 }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              label={labelText}
              onChange={handleChange}
              onBlur={onBlur}
              required={required}
            >
              {selectValues?.map((item) => (
                <MenuItem
                  key={item.title + `${Math.random()}`}
                  value={item.value}
                >
                  {item.title}
                </MenuItem>
              ))}

              <MyListSubheader
                sx={{
                  fontSize: 16,
                  fontWeight: 500,
                  letterSpacing: '0.025em',
                  color: '#212529',
                }}
              >
                Ativos Crypto
              </MyListSubheader>
              {CryptoPairs?.map((item) => (
                <MenuItem
                  key={item.title + `${Math.random()}`}
                  value={item.value}
                >
                  {item.title}
                </MenuItem>
              ))}

              <MyListSubheader
                sx={{
                  fontSize: 16,
                  fontWeight: 500,
                  letterSpacing: '0.025em',
                  color: '#212529',
                }}
              >
                Ativos OTC
              </MyListSubheader>
              {OTCPairs?.map((item) => (
                <MenuItem
                  key={item.title + `${Math.random()}`}
                  value={item.value}
                >
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          ) : (
            <Select
              ref={ref as any}
              name={name}
              className={className}
              sx={{ fontSize: 14, fontWeight: 500 }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              label={labelText}
              onChange={handleChange}
              onBlur={onBlur}
              required={required}
            >
              {selectValues?.map((item) => (
                <MenuItem
                  key={item.title + `${Math.random()}`}
                  value={item.value}
                >
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          )}
        </FormControl>
      </>
    )
  },
)
