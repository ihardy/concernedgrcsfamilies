# Concerned GRCS Families website

This is a simple website to point to a petition for GRCS.

## Building

You need hugo installed (https://gohugo.io). Then from this directory, run `hugo` and the site will be built in the public folder.

## Writing content

Normal hugo rules apply. To create a new news post, use:

```
hugo new content/news/my-news-post.md
```
Edit the file with your content and change the draft status to false. After a build it will show up in news.

## Development

I'm using the hugo-flex theme. Its contents are copied into the root dir. Open a PR or suggest changes to me. Thanks!
