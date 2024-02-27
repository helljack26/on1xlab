<link rel="stylesheet" href="assets/css/filters.min.css">

<div class="product_filters_mobile_bg"></div>

<form action="wp-themes" method="get" class='product_filters' data="0">
    <button type="button" class="product_filters_container_header">
        <span>
            Фiльтри
        </span>
        <!-- For mobile header close event -->
        <div class="product_filters_container_header_icon_sidefilters">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </button>
    <div class="product_filters_scroll">
        <div class="product_filters_list">

            <? $tags_by_cat = array(); 
                while ($row = mysqli_fetch_assoc($result_tag)) {
                    $tag = $row['tag_name'];
                    $tag_id = $row['tag_id']; 
                    $tag_cat = $row['tag_cat'];
                
                    if (!isset($tags_by_cat[$tag_cat])) {
                        $tags_by_cat[$tag_cat] = array(); 
                    }
                
                    $tags_by_cat[$tag_cat][] = array('name' => $tag, 'id' => $tag_id); 
                }
                foreach ($tags_by_cat as $cat => $tags) {
                    echo '<h2>' . $cat . '</h2>'; 
                
                    foreach ($tags as $tag) {
                        echo '<label>';
                        echo '<input type="checkbox" name="tags[]" value="' . $tag['name'] . '"> ' . $tag['name'];
                        echo '</label>';
                    }
                }
            ?>
        </div>
    </div>
    <div class="product_filters_footer">
        <button type="submit" class='product_filters_footer_submit'>
            Застосувати
        </button>
    </div>
</form>