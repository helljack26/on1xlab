<section id="services" class="section services">
    <h2>
        Послуги <nobr>веб-студії</nobr> Onixlab
    </h2>
    <div class="services_block">
        <? 
            $get_services = getUniqueServices($conn);
            $i = 0;
            foreach ($get_services as $services_item => $services_value):
                $i++;
                $service_name = $services_value['service_name'];
                $service_pathname = $services_value['pathname'];
                $service_price = $services_value['price'];
        ?>
        <!-- Services item -->
        <span class="services_block_item services_block_item_active">
            <h3>
                <?=$service_name?>
            </h3>
            <p>
                Від <span id="services<?=$i?>" class="services_block_item_price">
                    <?= $service_price?>
                </span>
                ₴
            </p>
            <span class="services_block_item_link">
                <a href='/service/<?=$service_pathname?>'>
                    Дізнатися більше
                </a>
            </span>
        </span>
        <? endforeach; ?>
    </div>
</section>