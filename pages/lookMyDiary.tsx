import Diary from "./components/diary";
import Footer from "./components/Footer";
import Header from "./components/header";

export default function lookMyDiary() {
    const testDatas = [
        {
            author: "user",
            title: "title",
            date: "2014-01-01",
            diaryText: "this is a test description",
        },
        {
            author: "user",
            title: "title",
            date: "2016-03-01",
            diaryText: "this is a test description",
        },
        {
            author: "user",
            title: "title",
            date: "2014-01-09",
            diaryText:
                "this is a test descriptionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
        },
    ];
    return (
        <div className=" font-fancy">
            <Header></Header>
            <div className="flex flex-col min-h-screen">
                <div className="m-8 mt-24 flex-grow">
                    {testDatas.map((testData, index) => (
                        <div key={index}>
                            <Diary
                                author={testData.author}
                                title={testData.title}
                                date={testData.date}
                                diaryText={testData.diaryText}
                            ></Diary>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
