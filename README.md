<h1 align=center>Next-Framework</h1>

<div align=center>
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white">
  <img src="https://img.shields.io/badge/swc-F8C457?style=for-the-badge&logo=swc&logoColor=white">
  <img src="https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest&logoColor=white">
  <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
  <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white">
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
</div>

<hr/>

<div>
  Next.js를 기반으로 웹 애플리케이션을 개발할 수 있는 템플릿 환경을 구성한 커스텀 프레임워크입니다. Next.js를 비롯한
  빌드 도구, 코드 컨벤션, 테스트 환경 등을 구성하였습니다. 이를 기반으로 웹 프로그램 개발을 시작할 수 있습니다.

  <br>
  <br>

  빌드 도구는 Next.js에 기본으로 구성된 Webpack과 SWC가 설정되어 있습니다. 더불어 Webpack의 성능을 보완하기 위해
  ESBuild-loader를 추가 설정하였습니다. React, TypeScript, Next.js 환경에 맞는 eslint, prettier 설정과 추가적으로
  triple 컨벤션을 적용하였습니다. Jest를 통한 테스트 코드 작성 및 테스트 수행이 가능하며 Storybook을 통해 UI 컴포넌트
  개발을 수행할 수 있습니다.
</div>

<hr/>

<div>
  <h2>Getting Started</h2>
  <h4>git clone</h4>
  <pre>
    <code>
      git clone https://github.com/lcy042000/Next-Framework.git
    </code>
  </pre>
</div>

<hr/>

<div align=center>
  <h3>라이브러리 목록</h3>
  <br>
  <table>
    <tr>
      <th>라이브러리</th>
      <th>라이센스</th>
      <th>버전</th>
    </tr>
    <tr>
      <td>
        <a href="https://ko.react.dev/">React</a>
      </td>
      <td>MIT License</td>
      <td>v18.3.1</td>
    </tr>
    <tr>
      <td>
        <a href="https://nextjs.org/">Next.js</a>
      </td>
      <td>MIT License</td>
      <td>v14.2.5</td>
    </tr>
    <tr>
      <td>
        <a href="https://www.typescriptlang.org/">TypeScript</a>
      </td>
      <td>Apache License</td>
      <td>v4.9.5</td>
    </tr>
    <tr>
      <td>
        <a href="https://jestjs.io/">Jest</a>
      </td>
      <td>MIT License</td>
      <td>v29.7.0</td>
    </tr>
    <tr>
      <td>
        <a href="https://eslint.org/">ESLint</a>
      </td>
      <td>MIT License</td>
      <td>v8.57.0</td>
    </tr>
    <tr>
      <td>
        <a href="https://prettier.io/">Prettier</a>
      </td>
      <td>MIT License</td>
      <td>v3.3.0</td>
    </tr>
    <tr>
      <td>
        <a href="https://storybook.js.org/">Storybook</a>
      </td>
      <td>MIT License</td>
      <td>v8.2.9</td>
    </tr>
  </table>
</div>

<hr/>

<div>
  <h2>Script</h2>
  <h4>프로그램</h4>
  <pre>
    <code>
      npm run dev // 개발 환경 구동
      npm run build // 프로그램 빌드
      npm run start // 빌드 환경 구동
    </code>
  </pre>
  <h4>코드 컨벤션</h4>
  <pre>
    <code>
      npm run lint // eslint 실행
      npm run format // prettire 실행
    </code>
  </pre>
  <h4>test</h4>
  <pre>
    <code>
      npm run test // jest 테스트 코드 실행
    </code>
  </pre>
  <h4>Storybook</h4>
  <pre>
    <code>
      npm run storybook // storybook 실행
    </code>
  </pre>
</div>

<hr/>

⚠️ 이 프로그램은 node v18.18.2와 npm v10.8.2 환경에서 구성되었습니다.
