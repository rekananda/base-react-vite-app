import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import { useAppDispatch, useAppSelector } from '@/store'
import { addCounter, reduceCounter, setCounter } from '@/store/GlobalSlice';
import { Anchor, Button, ButtonGroup, Flex, Group, Image, Stack, Text } from '@mantine/core';
import Icon from '@/Components/Atom/Icon';

function App() {
  const dispatch = useAppDispatch();
  const { counter } = useAppSelector((state) => state.global)

  return (
    <Flex className='full-screen' justify="center" align="center" direction="column" gap="lg">
      <Group gap="xl">
        <Anchor href="https://vitejs.dev" target="_blank">
          <Image src={viteLogo} h={90} w={90} fit="contain" />
        </Anchor>
        <Anchor href="https://react.dev" target="_blank">
          <Image src={reactLogo} h={90} w={90} fit="contain" />
        </Anchor>
      </Group>
      <Text component='h1'>Vite + React</Text>
      <Flex justify="center" align="center" direction="column" gap="md">
        <Stack gap={0} align="center">
          <Text fz={20} fw="bold">Counter is {counter}</Text>
          <Text fz={10} c="gray">this using redux to count</Text>
        </Stack>
        <ButtonGroup>
          <Button onClick={() => {dispatch(addCounter())}}><Icon name="IconPlus"/></Button>
          <Button onClick={() => {dispatch(setCounter(0))}}><Icon name="IconReload"/></Button>
          <Button onClick={() => {dispatch(reduceCounter())}}><Icon name="IconMinus"/></Button>
        </ButtonGroup>
        
        <Text>Edit <code>src/Pages/index.tsx</code> and save to test HMR</Text>
      </Flex>
      <Text fz={10}>Click on the Vite and React logos to learn more</Text>
    </Flex>
  )
}

export default App
