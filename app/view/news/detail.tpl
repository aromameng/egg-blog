<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <div class="new_detail">
      <h1>{{ info.title }}</h1>
      <span class="time">{{ info.created_at | formatTime }}</span>
      <p class="summary">{{ info.summary }}</p>
      <div class="content">
        {{ info.content }}
      </div>
    </div>
  </body>
</html>