import React from "react";
import { useRouter } from "next/router";
import Head from 'next/head'

export const CostomHead = () => {
    const router = useRouter()
    const BaseMeta = () => (
        <>
            <title>C3 OpenCampus2023</title>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="keywords" content="オープンキャンパス,Open Campus,open campus,九工大,九州工業大学,KIT,情報工学部,九工大情報工学部,九州工業大学情報工学部,C3,c3,CompositeComputerClub,サークル,部活,課外活動,club,ゲーム,Game,game,CG,3DCG,プログラミング,programming,IT,ctf,Web,ウェブ,動画制作,音楽,DTM,イラスト,ハッカソン,大学,福岡県" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="og:locale" content="ja_JP" />
            <link rel="icon" type="image/png" href="./assets/favicon.png" />
        </>
    )
    switch (router.pathname) {
        case "/":
            return (
                <Head>
                    <BaseMeta />
                    <meta name="description" content="九州工業大学情報工学部のサークルであるC3（CompositeComputerClub）の2023年度オープンキャンパスサイトです。C3部員が制作したゲームやCG、イラスト、アプリケーション、音楽、動画などのコンテンツを楽しむことが出来ます。このサイトも部員が制作した作品の一つです。是非楽しんでください！" />
                    <meta property="og:title" content="C3 OpenCampus2023" />
                    <meta property="og:description" content="九州工業大学情報工学部のサークルであるC3（CompositeComputerClub）の2023年度オープンキャンパスサイトです。C3部員が制作したゲームやCG、イラスト、アプリケーション、音楽、動画などのコンテンツを楽しむことが出来ます。このサイトも部員が制作した作品の一つです。是非楽しんでください！" />
                    <meta property="og:site_name" content="C3 OpenCampus2023" />
                    <meta property="og:url" content="https://oc2023.compositecomputer.club" />
                    <meta property="og:type" content="website" />
                </Head>)
        case "/map":
            return (
                <Head>
                    <BaseMeta />
                    <meta name="description" content="九州工業大学情報工学部のサークルであるC3（CompositeComputerClub）の2023年度オープンキャンパスサイトです。C3部員が制作したゲームやCG、イラスト、アプリケーション、音楽、動画などのコンテンツを楽しむことが出来ます。このサイトも部員が制作した作品の一つです。是非楽しんでください！" />
                    <meta property="og:title" content="C3 OpenCampus2023" />
                    <meta property="og:description" content="九州工業大学情報工学部のサークルであるC3（CompositeComputerClub）の2023年度オープンキャンパスサイトです。C3部員が制作したゲームやCG、イラスト、アプリケーション、音楽、動画などのコンテンツを楽しむことが出来ます。このサイトも部員が制作した作品の一つです。是非楽しんでください！" />
                    <meta property="og:site_name" content="C3 OpenCampus2023" />
                    <meta property="og:url" content="https://oc2023.compositecomputer.club/map" />
                    <meta property="og:type" content="website" />
                </Head>)
        case "/web":
            return (
                <Head>
                    <BaseMeta />
                    <meta name="description" content="九州工業大学情報工学部のサークルであるC3（CompositeComputerClub）の2023年度オープンキャンパスサイトです。C3部員が制作したゲームやCG、イラスト、アプリケーション、音楽、動画などのコンテンツを楽しむことが出来ます。このサイトも部員が制作した作品の一つです。是非楽しんでください！" />
                    <meta property="og:title" content="C3 OpenCampus2023" />
                    <meta property="og:description" content="九州工業大学情報工学部のサークルであるC3（CompositeComputerClub）の2023年度オープンキャンパスサイトです。C3部員が制作したゲームやCG、イラスト、アプリケーション、音楽、動画などのコンテンツを楽しむことが出来ます。このサイトも部員が制作した作品の一つです。是非楽しんでください！" />
                    <meta property="og:site_name" content="C3 OpenCampus2023" />
                    <meta property="og:url" content="https://oc2023.compositecomputer.club/web" />
                    <meta property="og:type" content="website" />
                </Head>)
        case "/web/artifact":
            return (
                <Head>
                    <BaseMeta />
                    <meta name="robots" content="noindex, nofollow" />
                    <meta name="description" content="九州工業大学情報工学部のサークルであるC3（CompositeComputerClub）の2023年度オープンキャンパスサイトです。このページはC3部員が作った作品の一覧です．是非楽しんでください！" />
                    <meta property="og:title" content="C3 OpenCampus2023 Artifacts" />
                    <meta property="og:description" content="C3部員がオープンキャンパス用に投稿した作品の一覧です！" />
                    <meta property="og:site_name" content="C3 OpenCampus2023" />
                    <meta property="og:url" content="https://oc2023.compositecomputer.club/web/artifact" />
                    <meta property="og:type" content="article" />
                </Head>)
        case "/web/artifact/[category]":
        case "/web/artifact/[category]/[artifactId]":
            switch (router.query.category) {
                case "hack":
                    return (
                        <Head>
                            <BaseMeta />
                            <meta name="description" content="Hackでは、主に「人の役に立つものをプログラミングで作ること」を行っています。製作物は、Webサイト・Bot・Windowsアプリ・スマホアプリ・OSなど様々なものを生み出しています。実用的に役に立つように見えなくても、人を笑わせることで役に立っている製作物もあります！また、ハッカソンや競技プログラミング、CTFをしている部員もおり、プログラミングに関して活発な活動が行われています！" />
                            <meta property="og:title" content="C3 OpenCampus2023 Artifacts" />
                            <meta property="og:description" content="Hackでは、主に「人の役に立つものをプログラミングで作ること」を行っています。製作物は、Webサイト・Bot・Windowsアプリ・スマホアプリ・OSなど様々なものを生み出しています。実用的に役に立つように見えなくても、人を笑わせることで役に立っている製作物もあります！また、ハッカソンや競技プログラミング、CTFをしている部員もおり、プログラミングに関して活発な活動が行われています！" />
                            <meta property="og:site_name" content="C3 OpenCampus2023" />
                            <meta property="og:url" content="https://oc2023.compositecomputer.club/web/artifact/hack" />
                            <meta property="og:type" content="article" />
                        </Head>
                    )
                case "game":
                    return (
                        <Head>
                            <BaseMeta />
                            <meta name="description" content="GAME分野では、アクションゲームやノベルゲームなど、部員が作りたいと思ったゲームジャンルで自由に制作を行っています。個人での制作もあれば、2DCGや3DCG、MUSICなど他の分野の人たちと協力しての制作も行っています！また、GAME分野には企画書制作などもありプログラミング以外で制作に関わる人もいます。ゲームが好き、ゲームが作りたいという部員が多く、先輩達から技術を教われる良い環境です。" />
                            <meta property="og:title" content="C3 OpenCampus2023 Artifacts Game" />
                            <meta property="og:description" content=" GAME分野では、アクションゲームやノベルゲームなど、部員が作りたいと思ったゲームジャンルで自由に制作を行っています。個人での制作もあれば、2DCGや3DCG、MUSICなど他の分野の人たちと協力しての制作も行っています！また、GAME分野には企画書制作などもありプログラミング以外で制作に関わる人もいます。ゲームが好き、ゲームが作りたいという部員が多く、先輩達から技術を教われる良い環境です。" />
                            <meta property="og:site_name" content="C3 OpenCampus2023" />
                            <meta property="og:url" content="https://oc2023.compositecomputer.club/web/artifact/game" />
                            <meta property="og:type" content="article" />
                        </Head>
                    )
                case "cg3d":
                    return (
                        <Head>
                            <BaseMeta />
                            <meta name="description" content="Computer Graphics = CGの中でも、「縦」「横」「奥行き」（x軸、y軸、z軸を使った３次元空間）の３方向が存在する仮想空間内で制作を行うものです。ゲーム、アニメーション、VRなど用途は様々です。3DCGでの制作にはやや大量の作業が必要ですが、高度な表現力を持つクリエイティブな作品を生み出すことができます。部員はBlender、Maya、Zbrush等多種多様なソフトを使用し、日々制作に励んでいます。" />
                            <meta property="og:title" content="C3 OpenCampus2023 Artifacts Game" />
                            <meta property="og:description" content="Computer Graphics = CGの中でも、「縦」「横」「奥行き」（x軸、y軸、z軸を使った３次元空間）の３方向が存在する仮想空間内で制作を行うものです。ゲーム、アニメーション、VRなど用途は様々です。3DCGでの制作にはやや大量の作業が必要ですが、高度な表現力を持つクリエイティブな作品を生み出すことができます。部員はBlender、Maya、Zbrush等多種多様なソフトを使用し、日々制作に励んでいます。" />
                            <meta property="og:site_name" content="C3 OpenCampus2023" />
                            <meta property="og:url" content="https://oc2023.compositecomputer.club/web/artifact/cg3d" />
                            <meta property="og:type" content="article" />
                        </Head>
                    )
                case "cg2d":
                    return (
                        <Head>
                            <BaseMeta />
                            <meta name="description" content="2DCGでは、主にデジタルイラストや動画など、主に2Dで表現されるものを含みます。デジタルイラストは、文字通りデジタルでイラストを描きます。アナログで絵を描くのとは違う表現が可能です。パソコンや専用機器がなくても、スマートフォンやタブレットで気軽に描くことができます！動画制作は、複数種類の画像,音楽,動画に動きやエフェクトを付け、組み合わせることで 新たな映像作品やPVなどを作り上げることです。無料の動画編集ソフトを使って気軽に制作できます。" />
                            <meta property="og:title" content="C3 OpenCampus2023 Artifacts Game" />
                            <meta property="og:description" content="2DCGでは、主にデジタルイラストや動画など、主に2Dで表現されるものを含みます。デジタルイラストは、文字通りデジタルでイラストを描きます。アナログで絵を描くのとは違う表現が可能です。パソコンや専用機器がなくても、スマートフォンやタブレットで気軽に描くことができます！動画制作は、複数種類の画像,音楽,動画に動きやエフェクトを付け、組み合わせることで 新たな映像作品やPVなどを作り上げることです。無料の動画編集ソフトを使って気軽に制作できます。" />
                            <meta property="og:site_name" content="C3 OpenCampus2023" />
                            <meta property="og:url" content="https://oc2023.compositecomputer.club/web/artifact/cg2d" />
                            <meta property="og:type" content="article" />
                        </Head>
                    )
                case "music":
                    return (
                        <Head>
                            <BaseMeta />
                            <meta name="description" content="MUSICコミュニティでは、DAWを用いた音楽制作を行っています。一人黙々と楽曲を作ったり、楽曲提供により他のコミュニティと協力して作品を作り上げたりと、さまざまな活動を体験することができます。" />
                            <meta property="og:title" content="C3 OpenCampus2023 Artifacts Game" />
                            <meta property="og:description" content="MUSICコミュニティでは、DAWを用いた音楽制作を行っています。一人黙々と楽曲を作ったり、楽曲提供により他のコミュニティと協力して作品を作り上げたりと、さまざまな活動を体験することができます。" />
                            <meta property="og:site_name" content="C3 OpenCampus2023" />
                            <meta property="og:url" content="https://oc2023.compositecomputer.club/web/artifact/music" />
                            <meta property="og:type" content="article" />
                        </Head>
                    )
                default:
                    return (
                        <Head>
                            <BaseMeta />
                        </Head>
                    )
            }
        default:
            return (
                <Head>
                    <BaseMeta />
                </Head>
            )
    }
}
