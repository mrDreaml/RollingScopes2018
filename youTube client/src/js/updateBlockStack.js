import createNode from './createNode';

export default function updateBlockItems(portion) {
  const blockStack = document.getElementById('block-stack');
  while (blockStack.hasChildNodes()) {
    blockStack.removeChild(blockStack.children[0]);
  }
  portion.forEach((e, i) => {
    const block = blockStack.appendChild(createNode('div', ['block']));
    block.a = block.appendChild(
      createNode('a', ['title-img'], [['href', '#']]),
    );
    block.a.appendChild(
      createNode(
        'img',
        [],
        [
          [
            'src',
            'https://img-aws.ehowcdn.com/877x500p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/f24b4a7bf9f24d1ba5f899339e6949f3',
          ],
          ['alt', 'img'],
        ],
      ),
    );
    block.text = block.appendChild(createNode('div', ['text']));
    block.text.author = block.text.appendChild(createNode('div', ['author']));
    block.text.author.appendChild(createNode('div', ['icon-author']));
    block.text.author.appendChild(
      createNode('a', [], [['href', '#']], 'Taylor Swift'),
    );

    function limitLength(textMsg, maxLength) {
      let limitText = textMsg;
      if (limitText.length > maxLength) {
        limitText = limitText.substring(0, maxLength);
        limitText += '...';
      }
      return limitText;
    }

    {
      const titleText = limitLength(portion[i].snippet.title, 35);
      block.appendChild(createNode('h2', ['title'], [['title', `[${portion[i].snippet.title}]`]], titleText));
    }

    block.appendChild(createNode('p', ['view-rate'], [], 'View rate: 999+'));
    block.appendChild(createNode('p', ['date'], [], 'Published: 11.09.2018'));

    {
      const descriptionText = limitLength(portion[i].snippet.description, 150);
      block.appendChild(createNode(
        'p',
        ['description'],
        [],
        descriptionText,
      ));
    }
  });

  blockStack.style.opacity = 0;
  setTimeout(() => {
    blockStack.style.transition = '.1s';
    blockStack.style.opacity = 1;
  }, 100);
}
