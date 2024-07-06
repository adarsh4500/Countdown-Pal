package main

import (
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
)

type Event struct {
	Id    int64  `json:"id"`
	Name  string `json:"name"`
	Time  string `json:"time"`
	Etype string `json:"type"`
	Desc  string `json:"desc"`
	Img   string `json:"img"`
}

var data = map[int]Event{
		1: {
			Id:    1,
			Name:  "Tech Conference",
			Time:  time.Now().Add(time.Minute * 10).Format("2006-01-02T15:04:05"),
			Etype: "public",
			Desc:  "Join us for the latest in technology trends and innovations.",
			Img:   "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/tech-conference-motion-poster-design-template-c9069c85b38025df6afa89df4647d346_screen.jpg?ts=1568457742",
		},
		2: {
			Id:    2,
			Name:  "Family Picnic",
			Time:  time.Now().Add(time.Second * 50).Format("2006-01-02T15:04:05"),
			Etype: "personal",
			Desc:  "A fun-filled day with family and friends at the park.",
			Img:   "https://www.aexplorers.com/wp-content/uploads/elementor/thumbs/familia-feliz-tomando-cafe-da-manha-em-um-parque-q3phxpujtjk9ux3u33hhns5adyqzly613ee8h73vag.jpg",
		},
		3: {
			Id:    3,
			Name:  "Product Launch",
			Time:  "2024-05-10T18:00",
			Etype: "public",
			Desc:  time.Now().Add(time.Minute * 10).Format("2006-01-02T15:04:05"),
			Img:   "https://myexhibiteam.com/wp-content/uploads/2018/04/launch.png",
		},
		4: {
			Id:    4,
			Name:  "Art Exhibition",
			Time:  "2024-07-22T10:00",
			Etype: "public",
			Desc:  "Explore the latest works from local artists.",
			Img:   "https://www.artsy.net/artwork_image/upload/c_limit,fl_progressive,q_80,w_1200/v1593597817/fsmduh6vngbl2edbvp8k.jpg",
		},
		5: {
			Id:    5,
			Name:  "Birthday Party",
			Time:  time.Now().Add(time.Hour * 5).Format("2006-01-02T15:04:05"),
			Etype: "personal",
			Desc:  "Celebrate John's 30th birthday with us.",
			Img:   "https://www.urbancompany.com/blog/wp-content/uploads/2021/09/birthday-decorations-at-home.jpg",
		},
		6: {
			Id:    6,
			Name:  "Cooking Workshop",
			Time:  "2024-06-15T14:00",
			Etype: "public",
			Desc:  "Join our master chef for a hands-on cooking experience.",
			Img:   "https://static.toiimg.com/photo/76467839.cms",
		},
		7: {
			Id:    7,
			Name:  "Yoga Retreat",
			Time:  "2024-08-01T06:00",
			Etype: "public",
			Desc:  "Rejuvenate your mind and body with our yoga retreat.",
			Img:   "https://images.unsplash.com/photo-1531000634222-8223e2a3df2f",
		},
		8: {
			Id:    8,
			Name:  "Music Festival",
			Time:  "2024-09-10T12:00",
			Etype: "public",
			Desc:  "Experience an unforgettable lineup of bands and artists.",
			Img:   "https://www.festicket.com/magazine/wp-content/uploads/2021/01/Best-Music-Festivals-in-UK.jpg",
		},
		9: {
			Id:    9,
			Name:  "Board Meeting",
			Time:  time.Now().Add(time.Hour * 2).Format("2006-01-02T15:04:05"),
			Etype: "personal",
			Desc:  "Quarterly board meeting to discuss company strategy.",
			Img:   "https://miro.medium.com/max/1200/1*D3a42FBXksuulcm5_7Uy6A.jpeg",
		},
		10: {
			Id:    10,
			Name:  "Charity Gala",
			Time:  "2024-11-20T19:00",
			Etype: "public",
			Desc:  "Join us for an evening of elegance and philanthropy.",
			Img:   "https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/10/charity-ball-800x534.jpg",
		},
	}

func main() {
	r := gin.Default()
	r.GET("/getevents", func(c *gin.Context) {
    var response []Event;
    for _, value := range data {
      response = append(response, value);
    }

		c.JSON(200, response)
	})
	r.GET("/geteventdetails/:id", func(c *gin.Context) {
		id, err := strconv.Atoi( c.Param("id"))
    if err != nil {
      c.String(500, "error")
    }
  
		c.JSON(200, data[id])
  })
		r.Run() // listen and serve on 0.0.0.0:8080

}