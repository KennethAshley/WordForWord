import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Contract from './build/contracts/Word.json';
import { uniqueId, last, times } from 'lodash';

import AppStyled, {
  WordWrapper,
  Button,
  Description,
  FormFooter,
  FormWrapper,
  Group,
  Heading,
  Input,
  Label,
  LastAuthor,
  Title,
  Tooltip,
  Underline,
  Word,
  Words,
} from './App.styled';

const address = '0xDcc3c2EfD6AD8F8378ea31C985E3cb97076e096c';

function App() {
  const [signer, setSigner] = useState('');
  const [word, setWord] = useState('');
  const [author, setAuthor] = useState('');
  const [amount, setAmount] = useState(0);
  const [words, setWords] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [isOwner, setIsOwner] = useState(false);
  const [prices, setPrices] = useState([0]);
  const [lastPrice, setLastPrice] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);

  useEffect(() => {
    async function cert() {
      const signingService = window.connex.vendor.sign('cert');
      const abi = Contract.abi.find(item => item.name === 'owner');
      const method = window.connex.thor.account(address).method(abi);
      const { decoded } = await method.call();

      signingService.request({
        purpose: 'identification',
        payload: {
          type: 'text',
          content: 'random'
        }
      }).then(({ annex }) => {
        setSigner(annex.signer);

        if (annex.signer === decoded[0]) {
          setIsOwner(true);
        }
      });
    }
  
    //cert();
  }, []);

  useEffect(() => {
    async function getWords() {
      const abi = Contract.abi.find(item => item.name === 'getWords');
      const method = window.connex.thor.account(address).method(abi);
      const { decoded } = await method.call();

      const words = decoded[0].map(hash => {
        return ethers.utils.parseBytes32String(hash);
      });

      if (decoded[0].length) {
        setWords(words);
      }
    }

    async function getAuthors() {
      const abi = Contract.abi.find(item => item.name === 'getAuthors');
      const method = window.connex.thor.account(address).method(abi);
      const { decoded } = await method.call();

      const authors = decoded[0].map(hash => {
        return ethers.utils.parseBytes32String(hash);
      });

      if (decoded[0].length) {
        setAuthors(authors);
      }
    }

    async function getPrices() {
      const abi = Contract.abi.find(item => item.name === 'getPrices');
      const method = window.connex.thor.account(address).method(abi);
      const { decoded } = await method.call();

      if (decoded[0].length) {
        setPrices(decoded[0]);
        setLastPrice(ethers.utils.formatEther(last(decoded[0])));
      }
    }

    async function getCurrentPrice() {
      const abi = Contract.abi.find(item => item.name === 'getCurrentPrice');
      const method = window.connex.thor.account(address).method(abi);
      const { decoded } = await method.call();
      const price = ethers.utils.formatEther(decoded[0]);

      setAmount(parseInt(price, 10));
      setCurrentPrice(parseInt(price, 10));
    }

    // getWords();
    // getAuthors();
    // getPrices();
    // getCurrentPrice();
  }, []);

  function handleWord(event) {
    let value = event.target.value;
    value = value.replace(/\s/g, "");

    if (value !== '.') {
      value = value.replace(/\W/g, "");
    }

    setWord(value);
  }

  function handleAuthor(event) {
    let value = event.target.value;
    value = value.replace(/\s/g, "");

    setAuthor(value);
  }

  function handleAmount(event) {
    setAmount(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    const signingService = window.connex.vendor.sign('tx');
    signingService.signer(signer);
    const abi = Contract.abi.find(item => item.name === 'addWord');
    const method = window.connex.thor.account(address).method(abi);
    const price = ethers.utils.parseEther(parseInt(amount, 10).toFixed(10));

    method.value(price.toString());

    const clause = method.asClause(
      ethers.utils.formatBytes32String(word),
      ethers.utils.formatBytes32String(author),
    );

    signingService.request([ clause ])
    .then(data => {
      console.log(data);
    });
  }

  function withdraw() {
    const signingService = window.connex.vendor.sign('tx');
    signingService.signer(signer);
    const abi = Contract.abi.find(item => item.name === 'withdraw');
    const method = window.connex.thor.account(address).method(abi);

    const clause = method.asClause();

    signingService.request([ clause ])
    .then(data => {
      console.log(data);
    });
  }

  function getAuthor(id) {
    return authors[id];
  }

  function getPrice(id) {
    let price = prices[id] || 0;

    if (price) {
      price = ethers.utils.formatEther(price);
    }

    return price;
  }

  return (
    <AppStyled>
      <Heading>
        <Title>Word For Word</Title>
        <LastAuthor>
          <Underline>
            { last(authors) }
          </Underline>
          {" "}
          got the last word for
          {" "}
          <Underline>
            { lastPrice } VET
          </Underline>
        </LastAuthor>
      </Heading>

      <Words>
        <WordWrapper>
          <Tooltip>
            <div>
              Author: Ken
            </div>
            <div>
              Price: 0.29
            </div>
          </Tooltip>
          <Word>
            Donald
          </Word>
        </WordWrapper>

        <WordWrapper>
          <Tooltip>
            <div>
              Author: Ken
            </div>
            <div>
              Price: 0.29
            </div>
          </Tooltip>
          <Word>
            Trump
          </Word>
        </WordWrapper>

        <WordWrapper>
          <Tooltip>
            <div>
              Author: Ken
            </div>
            <div>
              Price: 0.29
            </div>
          </Tooltip>
          <Word>
            isiii
          </Word>
        </WordWrapper>

        <WordWrapper>
          <Tooltip>
            <div>
              Author: Ken
            </div>
            <div>
              Price: 0.29
            </div>
          </Tooltip>
          <Word>
            isasdfasdf
          </Word>
        </WordWrapper>
        <WordWrapper>
          <Tooltip>
            <div>
              Author: Ken
            </div>
            <div>
              Price: 0.29
            </div>
          </Tooltip>
          <Word>
            ken
          </Word>
        </WordWrapper>

        <WordWrapper>
          <Tooltip>
            <div>
              Author: Ken
            </div>
            <div>
              Price: 0.29
            </div>
          </Tooltip>
          <Word>
            kai
          </Word>
        </WordWrapper>

      </Words>

      <form onSubmit={onSubmit}>
        <FormWrapper>
          <Group>
            <Input
              id="word"
              type="text"
              value={word}
              maxLength="20"
              onChange={handleWord}
              placeholder="word"
            />

            <Label htmlFor="word">Word</Label>
            <small>A-Z, a-z, and . characters only</small>
          </Group>
          <Group>
            <Input
              id="author"
              type="text"
              value={author}
              onChange={handleAuthor}
              placeholder="author"
            />
            <Label htmlFor="author">Author</Label>
            <small>username to identify you</small>
          </Group>

          <Group>
            <Input
              min={currentPrice.toString()}
              id="amount"
              type="number"
              value={amount}
              onChange={handleAmount}
              placeholder="Amount"
            />
            <Label htmlFor="amount">Amount</Label>
            <small>pay { amount } VET or whatever you want</small>
          </Group>
        </FormWrapper>

        <FormFooter>
          <Button type="submit">
            Add your word for a minimum of
            {" "}
            { currentPrice } VET
          </Button>
        </FormFooter>
      </form>


      <Description>
        <h2>
          What is Word For Word?
        </h2>
        <p>
          Word For Word is a simple Dapp created by
          {" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/raleigh_ca"
          >
            Raleigh_CA
          </a>
          {" "}
          that allows you to append a word to the end of the sentence, providing you pay more VET than the previous word. After a word is added, the price for the next word is increased by 20 VET.
        </p>
      </Description>

      { isOwner &&
        <Button onClick={withdraw}>Withdraw</Button>
      }
    </AppStyled>
  );
}

export default App;
