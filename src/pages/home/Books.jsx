import Book from "./Book";

const Books = () => {
    let books = [
        {
          "id": 1,
          "book_name": "To Kill a Mockingbird",
          "author_name": "Harper Lee",
          "tags": ["Classic", "Fiction"],
          "book_type": "Novel",
          "review": "Harper Lee's 'To Kill a Mockingbird' is a profound and moving exploration of moral integrity, justice, and the societal evils of prejudice and discrimination. Set in the racially charged South during the 1930s, it follows young Scout Finch as she navigates the challenges of growing up in a community rife with injustice and misunderstanding. Through the eyes of Scout, readers witness the steadfast courage of her father, Atticus Finch, who defends an innocent black man in the face of overwhelming odds and hostility. The novel is a timeless reminder of the importance of empathy, compassion, and standing up for what is right.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/330px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
          "number_of_pages": 281,
          "publish_year": 1960,
          "rating": 4.8
        },
        {
          "id": 2,
          "book_name": "1984",
          "author_name": "George Orwell",
          "tags": ["Dystopian", "Political"],
          "book_type": "Novel",
          "review": "George Orwell's '1984' is a chilling portrayal of a dystopian society controlled by totalitarian forces, where individuality and freedom are systematically obliterated. The novel takes readers into a world dominated by surveillance, propaganda, and fear, where truth is malleable, and history is rewritten to serve the Party's agenda. Through the eyes of Winston Smith, Orwell exposes the psychological and physical torment inflicted upon those who dare to think independently. '1984' serves as a powerful warning about the dangers of unchecked governmental power and the fragile nature of personal freedom. It remains as relevant today as it was upon its release.",
          "image_url": "https://upload.wikimedia.org/wikipedia/en/5/51/1984_first_edition_cover.jpg",
          "number_of_pages": 328,
          "publish_year": 1949,
          "rating": 4.7
        },
        {
          "id": 3,
          "book_name": "The Great Gatsby",
          "author_name": "F. Scott Fitzgerald",
          "tags": ["Classic", "Tragedy"],
          "book_type": "Novel",
          "review": "F. Scott Fitzgerald's 'The Great Gatsby' is a literary masterpiece that captures the glamour and excess of the Jazz Age while offering a poignant critique of the American Dream. The novel follows Jay Gatsby, a wealthy and enigmatic figure, whose undying love for Daisy Buchanan drives his every action. Narrated by Nick Carraway, a Midwesterner drawn into Gatsby's world of wealth and privilege, the story delves into themes of love, ambition, and the disillusionment of achieving one's dreams. The book’s rich symbolism and evocative prose make it a timeless exploration of human desire and the ultimate fragility of dreams.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/330px-The_Great_Gatsby_Cover_1925_Retouched.jpg",
          "number_of_pages": 180,
          "publish_year": 1925,
          "rating": 4.4
        },
        {
          "id": 4,
          "book_name": "Becoming",
          "author_name": "Michelle Obama",
          "tags": ["Memoir", "Inspirational"],
          "book_type": "Non-Fiction",
          "review": "Michelle Obama's 'Becoming' is an intimate, powerful, and inspirational memoir that offers readers a deep insight into the life of one of the most influential women of our time. Through her candid and engaging storytelling, Michelle takes readers through her childhood in Chicago, her education, her career, and her experiences as the First Lady of the United States. She shares the challenges she faced, the lessons she learned, and the values that shaped her into the woman she is today. 'Becoming' is a story of resilience, hope, and empowerment, leaving readers inspired to embrace their own unique journeys.",
          "image_url": "https://upload.wikimedia.org/wikipedia/en/0/09/Becoming_%28Michelle_Obama_book%29.jpg",
          "number_of_pages": 448,
          "publish_year": 2018,
          "rating": 4.9
        },
        {
          "id": 5,
          "book_name": "The Catcher in the Rye",
          "author_name": "J.D. Salinger",
          "tags": ["Classic", "Coming-of-Age"],
          "book_type": "Novel",
          "review": "J.D. Salinger's 'The Catcher in the Rye' is a deeply personal exploration of teenage angst and alienation. The novel follows Holden Caulfield, a rebellious and cynical teenager, as he wanders through New York City, grappling with his identity and the complexities of the adult world. Holden's raw and honest voice makes the narrative both relatable and profoundly moving. The book delves into themes of innocence, authenticity, and the struggle to find one's place in society. It is a timeless story that continues to resonate with readers, offering a glimpse into the vulnerabilities and fears of adolescence.",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/330px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg",
          "number_of_pages": 214,
          "publish_year": 1951,
          "rating": 4.3
        },
        {
          "id": 6,
          "book_name": "Sapiens: A Brief History of Humankind",
          "author_name": "Yuval Noah Harari",
          "tags": ["History", "Science"],
          "book_type": "Non-Fiction",
          "review": "Yuval Noah Harari's 'Sapiens: A Brief History of Humankind' is a fascinating exploration of the history and evolution of our species. The book spans from the cognitive revolution to the present day, examining how human beings came to dominate the planet and shape the world as we know it. Harari dives into key moments in history, such as the agricultural revolution, the rise of empires, and the advent of science and technology. He challenges readers to think critically about the implications of human progress, raising profound questions about our future. This book is a must-read for anyone seeking to understand humanity's journey.",
          "image_url": "https://upload.wikimedia.org/wikipedia/en/0/06/%E1%B8%B2itsur_toldot_ha-enoshut.jpg",
          "number_of_pages": 464,
          "publish_year": 2011,
          "rating": 4.6
        }
      ]
      
    return (
        <div className="mb-10">
            <h4 className="font-bold text-[40px] text-center mb-5">Books</h4>
            <div className="grid md:grid-cols-2 p-5 lg:p-0 lg:grid-cols-3 gap-5">
                {
                    books.map((book) => <Book key={book.id} book={book} />)
                }
            </div>
        </div>
    );
};

export default Books;