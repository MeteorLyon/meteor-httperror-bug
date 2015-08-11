try {
    // the issue can be reproduce if you use a url that will return a 404 HTTP status code and a body.
    // i made a simple php page to reproduce this behaviour (almost common on web)
    var urlTo404ButWithContent = "http://benjamin-richard.com/meteorjs/test_404_with_content.php";

    var response = HTTP.get(urlTo404ButWithContent, {
        "npmRequestOptions": {
            "encoding": null
        }
    });
} catch (e) {
    console.error('We never be here because of encoding null that use content as Buffer instead of string');
}